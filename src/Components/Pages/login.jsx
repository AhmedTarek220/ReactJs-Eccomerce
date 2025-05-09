import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from "../../firebase";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FcGoogle } from "react-icons/fc";
import image1 from "../../assets/new-3.webp"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      {/* تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور*/}
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

     {/* الوصول الي البيانات من ال firbase عن طريق ال uid(userId)*/}
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {

        setUserData(userDoc.data());  

        window.location.href = '/';  
      } else {
  
        alert('User data not found in Firestore');
      }
    } catch (err) {
      alert('Email or Password Is Incorrect')
     
    }
  };
  {/*التسجل عن طريق حساب جوجل*/}
  const handleGoogleSignUp = async () => {
    try {

      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user


      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        firstName: user.displayName.split(' ')[0],
        lastName: user.displayName.split(' ')[1],
        email: user.email,
        createdAt: new Date()
      })
      window.location.href = ('/')





    } catch (err) {
      setError(err.message);

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 py-28">
      <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800 bg-white dark:bg-zinc-800 w-[90%] md:w-[70%] lg:w-[80%]">



        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">Welcome Back!</h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-2 mb-8">
            We missed you, sign in to continue.
          </p>
                    {/* Google Login Button */}
          <div className="google text-center mb-4">


            <button
              onClick={handleGoogleSignUp}
              className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex justify-center gap-4"
            >
              <span><FcGoogle size={25}/></span>
              Log in with Google
            </button>
          </div>

          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-200">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 mb-6 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />

            <label className="block mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-200">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 mb-8 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
            >
              Let's Go
            </button>
          </form>

          <div className="text-sm text-blue-900 dark:text-blue-300 text-center mt-6">
            Don't have an account?{" "}
            <a href="/signUp" className="font-medium underline">
              Sign up
            </a>
          </div>

          {/* إذا تم تحميل بيانات المستخدم، يمكنك عرضها هنا */}
          {userData && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold">User Info:</h3>
              <p>First Name: {userData.firstName}</p>
              <p>Last Name: {userData.lastName}</p>
              <p>Email: {userData.email}</p>
            </div>
          )}
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={image1}
            alt="Login visual"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

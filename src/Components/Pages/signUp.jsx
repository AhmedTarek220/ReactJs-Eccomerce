import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import image1 from "../../assets/new-3.webp"

function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(alert(("Passwords do not match")))
      return;
    }


    try {
      const userData = await createUserWithEmailAndPassword(auth, email, password);
      const user = userData.user

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName,
        lastName,
        email: user.email,
        createdAt: new Date()
      })


      window.location.href = '/';
    } catch (err) {
      setError(alert('Error signing in with Google'));
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 py-28">
      <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800 bg-white dark:bg-zinc-800 w-[90%] md:w-[70%] lg:w-[90%]">

        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-10">

          <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">Create Account</h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-2 mb-8">
            Sign up now to join the experience.
          </p>




          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className='md:flex gap-4 mb-6 '>
              <div className='flex flex-col md:w-1/2'>
                <label className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-200">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-3 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div className='flex flex-col md:w-1/2'>
                <label className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-200">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"

                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-4 py-3 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
            </div>

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
            <label className="block mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-200">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-4 py-3 mb-8 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
            >
              Create Account
            </button>
          </form>

          <div className="text-sm text-blue-900 dark:text-blue-300 text-center mt-6">
            Already have an account?{" "}
            <a href="/login" className="font-medium underline">
              Log in
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={image1}
            alt="Sign up visual"
            className="h-[700px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

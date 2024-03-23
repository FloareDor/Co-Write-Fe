import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import { useRouter } from 'next/router';

const AssignmentPage = () => {
  const [assignmentCode, setAssignmentCode] = useState('');
  const router = useRouter();

  const handleCodeChange = (e) => {
    setAssignmentCode(e.target.value);
  };

  const handleContinue = () => {
    if (assignmentCode.trim() !== '') {
      router.push(`/write?assignmentCode=${assignmentCode}`);
    } else {
      alert('Please enter a valid assignment code.');
    }
  };

  return (
    <div className="bg-bgmain flex flex-col min-h-screen w-screen">
      <div className="flex flex-col justify-center gap-0 fixed top-0 start-0 z-10">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center mt-40 px-20">
        <h1 className="text-4xl font-bold mb-8">Assignment Page</h1>
        <div className="w-full max-w-md">
          <label htmlFor="assignmentCode" className="block text-gray-700 font-bold mb-2">
            Assignment Code
          </label>
          <input
            type="text"
            id="assignmentCode"
            value={assignmentCode}
            onChange={handleCodeChange}
            className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your assignment code"
          />
          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinue}
              className="bg-secondary-700 hover:bg-secondary-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-gray-700">
            If you don&apos;t have an assignment code, please contact your professor or teaching assistant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
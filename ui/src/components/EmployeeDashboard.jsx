import React, { useEffect, useState } from 'react';

const EmployeeDashboard = () => {
    const [assignedAssets, setAssignedAssets] = useState([]);
    const [employeeName, setEmployeeName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEmployeeDetails();
        fetchAssignedAssets();
    }, []);

    const fetchEmployeeDetails = async () => {
        try {
            // Assume `userId` is obtained from authentication context or similar
            const userId = '1'; // Replace with actual user ID
            const response = await fetch(`/api/employees/${userId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setEmployeeName(data.name);
        } catch (error) {
            setError('Failed to fetch employee details');
            console.error('Error fetching employee details:', error);
        }
    };

    const fetchAssignedAssets = async () => {
        try {
            // Assume `userId` is obtained from authentication context or similar
            const userId = '1'; // Replace with actual user ID
            const response = await fetch(`/api/assigned-assets/employee/${userId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setAssignedAssets(data);
        } catch (error) {
            setError('Failed to fetch assigned assets');
            console.error('Error fetching assigned assets:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="space-x-4">
                    <a href="/" className="text-blue-600 hover:text-gray-900">Home</a>
                </div>
                <div className="space-x-4">
                    <a href="/" className="text-blue-600 hover:text-gray-900">Logout</a>
                </div>
            </nav>
            <div className="container max-w-6xl mt-10 p-6 bg-gray-100 rounded-lg mx-auto">
                <div className="text-2xl font-bold text-center mb-6 text-black">Employee Dashboard</div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="text-center text-lg mb-4 text-black">
                    Welcome, {employeeName}
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Asset ID</th>
                                <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Asset Name</th>
                                <th className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider">Assigned Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignedAssets.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-4 text-center text-gray-500">No assigned assets</td>
                                </tr>
                            ) : (
                                assignedAssets.map(asset => (
                                    <tr key={asset.assetId} className="border-b border-gray-200">
                                        <td className="px-6 py-4">{asset.assetId}</td>
                                        <td className="px-6 py-4">{asset.assetName}</td>
                                        <td className="px-6 py-4">{new Date(asset.assignedDate).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;

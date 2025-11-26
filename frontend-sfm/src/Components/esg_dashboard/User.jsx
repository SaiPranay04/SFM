import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users'); 
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
};

const fetchRoles = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/roles'); 
    return response.data;
  } catch (error) {
    console.error('Failed to fetch roles:', error);
    return [];
  }
};

const generateUserID = (index) => {
  const prefix = 'ABC';
  const idNumber = (index + 1).toString().padStart(3, '0');
  return `${prefix}${idNumber}`;
};

const User = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      const rolesData = await fetchRoles();

      const usersWithActiveFlag = data.map((user) => ({
        ...user,
        active: user.active ?? false,
      }));
      setUsers(usersWithActiveFlag);
      setRoles(rolesData);
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => setSearch(event.target.value);

  const handleToggleActive = (index) => {
    setUsers((prevUsers) =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, active: !user.active } : user
      )
    );
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${selectedUser._id}`, selectedUser);
      setUsers((prevUsers) => prevUsers.map((user) => (user._id === selectedUser._id ? selectedUser : user)));
      setEditDialogOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleRoleChange = (event, userIndex) => {
    const newRole = event.target.value;
    setUsers((prevUsers) =>
      prevUsers.map((user, index) =>
        index === userIndex ? { ...user, role: newRole } : user
      )
    );
  };

  const filteredUsers = users.filter((user) =>
    user.username?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <main className="flex-grow p-3">
        <header className="bg-green-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center bg-white rounded-md px-2">
            <input
              type="text"
              placeholder="Search By Username"
              value={search}
              onChange={handleSearchChange}
              className="p-2 focus:outline-none"
            />
            <SearchIcon className="text-gray-500" />
          </div>
        </header>
        <div className="container mx-auto mt-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Users</h1>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user._id} className="border-t">
                    <td className="px-4 py-2">{generateUserID(index)}</td>
                    <td className="px-4 py-2">{user.username}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">
                      <select
                        value={user.role || ''}
                        onChange={(event) => handleRoleChange(event, index)}
                        className="border rounded-md p-1 w-full"
                      >
                        <option value="" disabled>Select Role</option>
                        {roles.map((role) => (
                          <option key={role._id} value={role.name}>{role.name}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-2 flex items-center space-x-2">
                      <Switch
                        checked={user.active}
                        onChange={() => handleToggleActive(index)}
                        color="primary"
                      />
                      <button onClick={() => handleEditUser(user)} className="text-blue-500">
                        <EditIcon />
                      </button>
                      <button onClick={() => handleDeleteUser(user._id)} className="text-red-500">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
              {selectedUser && (
                <div>
                  <input
                    type="text"
                    value={selectedUser.username}
                    onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
                    placeholder="Username"
                    className="border rounded-md w-full p-2 mb-4"
                  />
                  <input
                    type="email"
                    value={selectedUser.email}
                    onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                    placeholder="Email"
                    className="border rounded-md w-full p-2 mb-4"
                  />
                </div>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleEditSubmit}>Save</Button>
            </DialogActions>
          </Dialog>
        </div>
      </main>
    </div>
  );
};

export default User;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from '../components/AdminHader'; // Corrected typo in component import
import { Button } from '../Styles/Button';
import styled from "styled-components";

const AdminMain = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:5050/users/admingetuserbyemail/${email}`)
        .then(response => {
          const userData = response.data;
          if (userData) {
            setUsers([userData]);
          } else {
            setUsers([]);
          }
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    } else {
      axios.get('http://localhost:5050/users/getallusers')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  }, [email]);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value.trim()); // Trim whitespace and set the email state
  };
  // const handleDeleteUser = (userId) => {
  //   if (!userId) return;
  //   if (window.confirm("Are you sure you want to delete this user?")) {
  //     axios.delete(`http://localhost:5050/users/deleteUser/${userId}`)
  //       .then(response => {
  //         setUsers(users.filter(user => user.id !== userId));
  //       })
  //       .catch(error => {
  //         console.error('Error deleting user:', error);
  //       });
  //   }
  // };



  const orderview = (userID) => {
    navigate(`/admin/orderview/${userID}`);
  };

  const cartview = (userID) => {
    navigate(`/admin/cartview/${userID}`);
  };

  return (
    <>
      <AdminHeader />
      <Wrapper>

        <input
          type="eamil"
          className='input'
          placeholder="Enter User's Email"
          value={email}
          onChange={handleEmailChange}
        />
        {users.length === 0 ? (
          <div className="centered">
            <p>No user found</p>
          </div>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Password</th>
                  <th>View Cart</th>
                  <th>View Orders</th>
                  {/* <th>Update</th>
                <th>Delete</th> */}
                  {/* Add other table headers for additional fields */}
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>
                      {user.photo && (
                        <img className='image' src={`data:image/jpeg;base64,${user.photo}`} alt={user.name} />
                      )}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.password}</td>
                    <th><Button className='c_view' onClick={() => cartview(user.id)}>View</Button></th>
                    <th><Button className='o_view' onClick={() => orderview(user.id)}>View</Button></th>
                    {/* <td>
                    <Button className='update_btn'>
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button className='delete_btn' onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </Button>
                  </td> */}
                    {/* Add other table cells for additional fields */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Wrapper>
    </>

  );
};

const Wrapper = styled.section`

.input{
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  outline: none;
  text-transform: none;
}

.input:hover{
  box-shadow: 0px 0px 41px 0px rgba(108, 70, 184, 1);
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh; /* Adjust as needed */
}

.centered p {
  text-align: center;
  font-size: 30px;
  text-weight: 800;
  color: red;
  text-transform: uppercase;
}

.o_view{
  background-color: #07945e;
  font-size: 14px;
  padding: 8px;
}
.c_view{
  background-color: #a86f13;
  font-size: 14px;
  padding: 8px;
}
.image{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
table{
  width: 96%;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border: 2px solid purple;
  border-collapse: collapse;
}
th, td{
  padding: 5px;
  border: 1px solid purple;
  text-align: center;
  color: black;
  font-size: 15px;
}
.update_btn{
  font-size: 10px;
  padding: 5px;
  background-color: #10876d;
  margin-right: 10px;
  margin-left: 10px;
}
.delete_btn{
  font-size: 10px;
  padding: 5px;
  background-color: #bd080e;
  margin-right: 10px;
  margin-left: 10px;
}
`

export default AdminMain;

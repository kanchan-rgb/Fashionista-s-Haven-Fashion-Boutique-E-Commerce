
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../components/AdminHader'; // Corrected typo in component import
import { Button } from '../Styles/Button';
import styled from "styled-components";

const AdminContactUsDatabase = () => {
  const [contactus, setContactUs] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5050/contactus/getallcontactus')
      .then(response => {
        setContactUs(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    if (!userId) return;
    if (window.confirm("Are you sure you want to delete this report?")) {
      axios.delete(`http://localhost:5050/contactus/deletecontactus/${userId}`)
        .then(response => {
            setContactUs(contactus.filter(user => user.id !== userId));
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    }
  };


  return (
    <>
      <AdminHeader />
      <Wrapper>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
                {/* <th>Update</th>
                <th>Delete</th> */}
                {/* Add other table headers for additional fields */}
              </tr>
            </thead>
            <tbody>
              {contactus.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.message}</td>
                  {/* <td>
                    <Button className='update_btn'>
                      Update
                    </Button>
                  </td> */}
                  <td>
                    <Button className='delete_btn' onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </Button>
                  </td>
                  {/* Add other table cells for additional fields */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </Wrapper>
    </>

  );
};

const Wrapper = styled.section`
.add_product{
  margin-top: 20px;
  margin-left: 20px;
  background-color: #099176;
}
.image{
  width: 80px;
  height: 90px;
  border-radius: 50%;
}
table{
  width: 97%;
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

export default AdminContactUsDatabase;

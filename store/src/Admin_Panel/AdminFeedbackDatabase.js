
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../components/AdminHader'; // Corrected typo in component import
import { Button } from '../Styles/Button';
import styled from "styled-components";
import StarForFeedback from '../components/StarForFeedback';

const AdminContactUsDatabase = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedbacksResponse = await axios.get('http://localhost:5050/feedbacks/getallfeedbacks');
        const feedbacksData = feedbacksResponse.data;
        

        const updatedFeedbacks = [];
        for (const feedback of feedbacksData) {
          const userId = feedback.userid;
          const userResponse = await axios.get(`http://localhost:5050/users/getusers/${userId}`);
          const userData = userResponse.data;
          updatedFeedbacks.push({
            ...feedback,
            name: userData.name,
            userImage: userData.photo,
            email: userData.email
          });
        }

        setFeedback(updatedFeedbacks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);


  return (
    <>
      <AdminHeader />
      <Wrapper>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>User Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Rating</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map(feedback => (
                <tr key={feedback.id}>
                  <td>{feedback.id}</td>
                  <td>{feedback.userid}</td>
                  <td><img className='userimage' src={`data:image/jpeg;base64,${feedback.userImage}`} alt="User"/></td>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td><StarForFeedback stars={feedback.rating}/></td>
                  <td>{feedback.message}</td>
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


.userimage{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
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

export default AdminContactUsDatabase;

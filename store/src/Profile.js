import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  h2{
    text-align: center;
    color: #421366;
  }
`;

const ProfileForm = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-transform: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: purple;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6a0dad;
    box-shadow: 1px 2px 2px 2px black;
  }
`;

const ImagePreview = styled.img`
  max-width: 200px;
  margin-top: 20px;
`;

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState({ name: '', email: '', phoneNumber: '', photo: '', password: '' });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photo, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5050/users/getusers/${id}`);
            setProfile(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phoneNumber);
            setPassword(response.data.password);

            // Set the image and its preview URL only if the photo exists
            if (response.data.photo) {
                setPreviewUrl(`data:image/jpeg;base64,${response.data.photo}`);
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching profile:', error);
            setLoading(false);
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('db_name', name);
            formData.append('db_email', email);
            formData.append('db_phnumber', phoneNumber);
            formData.append('db_password', password);
            if (photo) {
                formData.append('db_image', photo);
            }
            await axios.post(`http://localhost:5050/users/updateUser/${id}`, formData);

            // Update localStorage with the new profile data
            const updatedProfile = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                photo: previewUrl // Use the previewUrl or response.data.photo depending on your backend
            };
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(updatedProfile));
            window.location.reload();
        } catch (error) {
            console.error('Error updating profile:', error);
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
    };

    return (
      <>
      <Header/>
        <ProfileContainer>
            <h2>MY PROFILE</h2>
            {loading && <p>Loading...</p>}
            <ProfileForm onSubmit={handleUpdateProfile}>
                <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phoneNumber">Phone Number:</Label>
                    <Input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input type="text" id="password" value={password} minLength={8} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                
            
            <div>
                <h3>Profile Picture</h3>
                {previewUrl && (
                    <ImagePreview src={previewUrl} alt="Preview" />
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <Button type="submit">Update Profile</Button>
            </ProfileForm>
        </ProfileContainer>
        </>
    );
};

export default Profile;

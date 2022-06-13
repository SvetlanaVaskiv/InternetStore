import  { useState } from 'react'
import { Button , Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import LoginPage from '../LogIn/LoginPage';

function SignUpForm(){
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);
  const onSave = (e) => {
    e.preventDefault();
    const data = {
      userEmail: email,
      pass: password,
      phoneNumber: phone,
      userName: username,
    };
    console.log(data);
    setEmail("");
    setPassword("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label > Your Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleChangeUsername}
        />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label > Your Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChangeEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label > Your Phone</Form.Label>
        <Form.Control
          type="tel"
          name='phone'
          placeholder="Enter your phone number"
          value={phone}
          onChange={handleChangePhone}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
        />
        <Form.Text className="text-muted">
          We'll never share your phone number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your password </Form.Label>
        <Form.Control
          placeholder="Password"
          type="password"
          value={password}
          onChange={handleChangePass}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <h3> Do you already have an account? <Button onClick={()=> navigate("./login")} >LOG IN</Button></h3>
      <Button variant="primary" type="submit" onClick={onSave}>
        Submit
      </Button>
    </Form>
  );
}
export default  SignUpForm

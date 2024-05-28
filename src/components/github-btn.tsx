import { auth } from "@/firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.span`
  cursor: pointer;
  background-color: white;
  font-weight: 500;
  margin-top: 50px;
  color: black;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function githubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return <Button onClick={onClick}>Continue with Github</Button>;
}

import { useNavigate } from "react-router-dom";
import { Button, CommonText, CreateAccountContainer, CreateAccountWrapper, TextField } from "./create_account_styles";

type CreateAccountProp = {};

const CreateAccount: React.FC<CreateAccountProp> = () => {
  const navigate = useNavigate();
  return <CreateAccountWrapper>
    <CreateAccountContainer>
      <CommonText fontSize={"36px"} fontWeight={700}>Create Account</CommonText>
      <CommonText style={{marginBottom: "2rem"}}>Create an account to enjoy all the services without any ads for free</CommonText>
      <TextField placeholder="Name"/>
      <TextField placeholder="Email Address"/>
      <TextField placeholder="password"/>
      <Button onClick={() => navigate("home")}>Create Account</Button>
    </CreateAccountContainer>
  </CreateAccountWrapper>
}

export default CreateAccount;
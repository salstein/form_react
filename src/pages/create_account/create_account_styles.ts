import { styled } from "styled-components";
import { theme } from "../../theme";

interface CreateAccountProbs {
  fontSize?: any;
  fontWeight?: number;
}

export const CreateAccountWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountContainer = styled.div`
  background: ${theme.colors.white_color};
  padding: 4rem;
  width: 60%;
  text-align: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

`;

export const TextField = styled.input`
  outline: none;
  width: 80%;
  padding-left: 10px;
  padding-right: 10px;
  border:1px solid ${theme.colors.grey_color};
  height: 60px;
  border-radius: 10px;
  margin-bottom: 6px;

`;

export const CommonText = styled.p<CreateAccountProbs>`
  font-size: ${(probs: any) => probs.fontSize};
  font-weight: ${(probs: any) => probs.fontWeight};
  color: ${theme.colors.black_color};
`;

export const Button = styled.button`
  width: 50%;
  border: 0;
  border-radius: 10px;
  height: 60px;
  background: ${theme.colors.primary_color};
  color: ${theme.colors.white_color};
  margin-top: 1rem;
`;
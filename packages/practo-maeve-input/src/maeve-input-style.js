import styled from 'styled-components';

export const InputLabel = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  display:  inline-block;
  width: 100%;
  color: red;
`;

export const InputField = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #cccccc;
  padding: 0px 10px;
  box-sizing:border-box;
`;

export const InputDisabledField = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #cccccc;
  padding: 0px 10px;
  box-sizing:border-box;
  pointer-events: none;
  background-color: whitesmoke;
  color: #bdbdbd;
  border-bottom: 1px dotted #ddd;
  box-shadow: none;
}
`;

export const Star = styled.input`
  padding-left: 3px;
  color: orangered;
`;

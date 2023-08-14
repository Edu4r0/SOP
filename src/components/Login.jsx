import database from "../data/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function handleSubmit(e) {
    e.preventDefault();
  const email =   e.target.email.value;
  const password = e.target.password.value;

  signInWithEmailAndPassword(database, email , password).then(data =>(
    console.log(data,'authData')
  ))

}


function Login() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="" id="" />
      </form>
    </div>
  );
}

export default Login;

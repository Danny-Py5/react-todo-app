import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <p>
        <b>Hi there, Welcome</b>
      </p>
      <div className="user-cont">
        <img
          src="./src/components/welcome/user.jpg"
          width={100}
          height={200}
          alt="user"
        />
      </div>
    </div>
  );
}

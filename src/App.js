import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SearchInput";
import { UseCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "ターボ",
  image: "https://source.unsplash.com/cfIcTiopin4",
  email: "1234@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SerchInput />
      <UseCard user={user} />
    </div>
  );
}

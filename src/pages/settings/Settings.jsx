import { useSelector } from "react-redux";
import { BanksTable } from "../../shared/table/BanksTable";

export const Settings = () => {
  const banksState = useSelector((state) => state.banks)
  console.log(banksState)

  return (
    <main>
      <h1>Settings</h1>
      <BanksTable banks={banksState.banks} />
    </main>
  );
};

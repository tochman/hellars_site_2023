import { Route, Routes } from "react-router-dom";
import MainView from "./views/MainView";
import LegalServices from "./views/LegalServices";
import AccountingServices from "./views/AccountingServices";
import DigitalServices from "./views/DigitalServices";
import ManagementServices from "./views/ManagementServices";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/legal" element={<LegalServices />} />
      <Route path="/accounting" element={<AccountingServices />} />
      <Route path="/digital" element={<DigitalServices />} />
      <Route path="/management" element={<ManagementServices />} />
    </Routes>
  )
}

export default App
/*React */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

/*Scenes */
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/Sidebar";

/*Part of Sidebar*/
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import RiskDashboard from "./scenes/riskdashboard";

/*Risk Dashboard*/
/*Buttons on Risk Dashboard*/
import Blk8 from "./scenes/blk8";
import Blk23 from "./scenes/blk23";
import Blk51 from "./scenes/blk51";
import Blk72 from "./scenes/blk72";
import Blk73 from "./scenes/blk73";
import BlkSIT from "./scenes/blkSIT";

import Map from "./scenes/map";

/*Theme */ 
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {<Route path="/" element={<Dashboard />} />}
              {<Route path="/team" element={<Team />} />}
              {<Route path="/contacts" element={<Contacts />} />}
              {<Route path="/invoices" element={<Invoices />} />}
              {<Route path="/form" element={<Form />} />}
              {<Route path="/bar" element={<Bar />} />}
              {<Route path="/pie" element={<Pie />} />}
              {<Route path="/line" element={<Line />} />}
              {<Route path="/faq" element={<FAQ />} />}
              {<Route path="/calendar" element={<Calendar />} />}
              {<Route path="/geography" element={<Geography />} />}
              {<Route path="/riskdashboard" element={<RiskDashboard />} />}

              {/*Risk Dashboard buttons */}
              {<Route path="/riskdashboard/blk8" element={<Blk8/>}/>}
              {<Route path="/riskdashboard/blk23" element={<Blk23/>}/>}
              {<Route path="/riskdashboard/blk51" element={<Blk51/>}/>}
              {<Route path="/riskdashboard/blk72" element={<Blk72/>}/>}
              {<Route path="/riskdashboard/blk73" element={<Blk73/>}/>}
              {<Route path="/riskdashboard/blkSIT" element={<BlkSIT/>}/>}

              {/*Risk Map*/}
              {<Route path="/map" element={<Map/>}/>}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
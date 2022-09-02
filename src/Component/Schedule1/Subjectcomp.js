import React, { useState } from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import calender from "../../../images/calender.png";
import { dropdownstyle } from "./styledcomp";
import { Imgcomp } from "../Reusecomp/Imgcomp";
import dropdownicon from "../../../images/dropdownbtn.png";
import { Inputcomp } from "../Reusecomp/Inputcomp";

export const Subjectcomp = ({ subject, subjectcode, index }) => {

  const [isfnactive, setisfnactive] = useState(false);
  const [isanactive, setisanactive] = useState(false);

  const changefncolor = ()=>{
    setisanactive(isfnactive);
    setisfnactive(!isfnactive);
  }
  const changeancolor = ()=>{
    setisfnactive(isanactive);
    setisanactive(!isanactive);
  }
    
  return (
    <Box name={"subject" + (index + 1)} cssStyle={{ marginTop: "30px" }}>
      <Textcomp Comp="div" value={"subject" + (index + 1)} />

      <Box
        name="sublistinp"
        cssStyle={{ display: "flex", flexDirection: "row" }}
      >
        <Box
          name="subcode"
          cssStyle={{
            ...dropdownstyle,
            width: "15%",
            padding: "20px 0 20px 24px",
            position: "relative",
          }}
          // onclick = {changeHidden}
        >
          <Textcomp value={subjectcode} />
          <Imgcomp
            source={dropdownicon}
            alternative="dropdown"
            cssStyles={{ position: "absolute", right: "10%", bottom: "40%" }}
          />
        </Box>

        <Box
          name="subtitle"
          cssStyle={{
            ...dropdownstyle,
            width: "35%",
            padding: "20px 0 20px 24px",
            backgroundColor: "#F2F2F2",
            color: "#ABA9AE",
          }}
          // onclick = {changeHidden}
        >
          <Textcomp value={subject} />
        </Box>
        <Inputcomp 
        type = "date" 
        cssStyles={{
            ...dropdownstyle,
            width: "25%",
            padding: "20px 24px",
            position: "relative",
          }}
          />

        <Box name="fnORan" cssStyle={{ display: "flex", flexDirection: "row" }}>
          <Box
            name="button"
            cssStyle={{
              color: "#fff",
              backgroundColor: isfnactive? "#5375E2":"#fff",
              display: "flex",
              width: "98%",
              border: "1px solid #5375E2",
              borderRadius: "5px",
              margin: "20px 20px 20px 0",
            }}
            onclick={changefncolor}
          >
            <Textcomp
              Comp="span"
              cssStyles={{
                fontWeight: 400,
                color: isfnactive? "#fff":"#5375E2",
                fontSize: "16px",
                padding: "10px 15px 8px 15px",
                lineHeight: "22px",
              }}
              value="FN"
            />
          </Box>

          <Box
            name="button"
            cssStyle={{
              color: "#fff",
              backgroundColor: isanactive? "#5375E2":"#fff",
              display: "flex",
              width: "98%",
              border: "1px solid #5375E2",
              borderRadius: "5px",
              margin: "20px 0 20px 0",
            }}
            onclick={changeancolor}
          >
            <Textcomp
              Comp="span"
              cssStyles={{
                fontWeight: 400,
                color: isanactive? "#fff":"#5375E2",
                fontSize: "16px",
                padding: "10px 15px 8px 15px",
                lineHeight: "22px",
              }}
              value="AN"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
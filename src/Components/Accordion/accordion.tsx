import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.css";

export default function BasicAccordion(props: { title: string; body: string }) {
  const [expanded, setExpended] = useState(false);
  let title: string = props.title,
    body: string = props.body;
  return (
    <div className="accordion">
      <Accordion expanded={expanded} onChange={() => setExpended(!expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={`accordion-design ${expanded && "textColor"}`}
        >
          <Typography>
            <strong>{title}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F5DADF",
            padding: "1em 2em",
            borderRadius: "0 0 15px 15px",
          }}
          className="rounded-bottom"
        >
          <Typography>{body}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

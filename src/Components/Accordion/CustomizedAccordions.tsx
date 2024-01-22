import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ userAndStory }) {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    console.log("userAndStory(in Accordion Component): ");
    console.log(userAndStory);

    console.log("userAndStory[0]:");
    console.log(userAndStory[0]);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
        
    return (
        <div>
            {userAndStory.map((element, key) => {
                return (
                    <Accordion expanded={expanded === 'panel'+key.toString()} onChange={handleChange('panel'+key.toString())}>
                        <AccordionSummary aria-controls={"panel"+key.toString()+"d-content"} id={"panel"+key.toString()+"d-header"}>
                            <Typography>{element.memberName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {element.story}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    );
}

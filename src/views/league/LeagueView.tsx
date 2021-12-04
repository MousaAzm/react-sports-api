import { useState, useEffect } from "react";
import SportAPIService from "../../shared/api/services/SportAPIService";
import {
  Container,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClapSpinner } from "react-spinners-kit";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const LeagueView = () => {
  const [resData, setResData] = useState<any>([]);
  const [leagueValue, setLeagueValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setLeagueValue(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        await SportAPIService.getAllLeague().then(
          (response) => {
            setResData(response.data.countrys);
            setLoading(false);
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const displayData = (number: any) => {
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={resData[number]?.strBadge}
            alt="Badge Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ my:1, py: 1 }}>
             <strong>League : </strong>{resData[number]?.strLeague}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Country : </strong>{resData[number]?.strCountry}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description:</Typography>
              <Typography paragraph>{resData[number]?.strDescriptionEN}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </>
    );
  };

  return (
    <div>
      <Container sx={{ display:'flex', justifyContent:'center', my:4 }}>
        <FormControl variant="standard" sx={{ m: 2, minWidth: 210 }}>
          <InputLabel id="select-league">League Select</InputLabel>
          <Select
            labelId="select-league"
            id="simple-select-standard"
            value={leagueValue}
            onChange={handleChange}
            label="league"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {resData.map((item: any, index: any) => {
              return <MenuItem value={index}>{item.strLeague}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Container>
      <Container sx={{ display:'flex', justifyContent:'center' }}>
        {!loading ? (
          displayData(leagueValue)
        ) : (
          <div className="spinner">
            <ClapSpinner size={30} frontColor="#1bac22" backColor="#9bef9f" />
          </div>
        )}
      </Container>
    </div>
  );
};


import {
	Grid,
	Container,
	Card,
	Button,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	CardHeader,
	Typography,
	Avatar,
	IconButton
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import imgData from './../Data/imgurl.json';

const useStyle = makeStyles((theme) => ({
	root: {
		minWidth: '100%',
		height: '100vh',
		backgroundColor: theme.palette.grey[300],
		paddingTop: theme.spacing(5)
	},
	upperCase: {
		textTransform: 'uppercase'
	},
	media: {
		height: 300
	}
}));

export const Cards = () => {
	const classes = useStyle();


	return (
		<Container className={classes.root}>
			<Grid container spacing={5}>
				{Object.entries(imgData.slice(11,20)).map(([index,{imgUrl}]) => (
					
					<Grid key={index} item xs={12} sm={6} lg={3}>
					<Card>
						<CardActionArea>
							<CardHeader
								title="Food Recipe"
								subheader="Posted: 7 Feb 2021"
								avatar={<Avatar>MA</Avatar>}
								action={
									<IconButton>
										<AddShoppingCartIcon />
									</IconButton>
								}
							/>
							<CardMedia
								component="img"
								image={imgUrl}
								className={classes.media}
							/>
						</CardActionArea>

						<CardContent>
							<Typography variant="h6" className={classes.upperCase}>
								product type
							</Typography>
							<Typography variant="subtitle2">
								Magna laboris non in consectetur cupidatat proident ullamco qui ex laboris in non quis .
								Aute irure est ex id est aute labore incididunt sint qui ullamco. Aute tempor consequat
								ut ut esse. Voluptate pariatur magna id mollit laborum .
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant="outlined" color="primary">
								learn more
							</Button>
						</CardActions>
					</Card>
				</Grid>))}

				
			</Grid>
		</Container>
	);
};

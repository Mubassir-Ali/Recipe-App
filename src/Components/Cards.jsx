
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
import imgData from './../Data/imagesUrl.json';

const useStyle = makeStyles((theme) => ({
	root: {
		minWidth: '100%',
		height: '100%',
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
				{Object.entries(imgData).map(([index,{url,authorImage,authorName,desc}]) => (
					
					<Grid key={index} item xs={12} sm={6} lg={3}>
					<Card>
						<CardActionArea>
							<CardHeader
								title={authorName}
								subheader="Posted: 7 Feb 2021"
								avatar={<Avatar><img src={authorImage} alt={authorName} /></Avatar>}
								action={
									<IconButton>
										<AddShoppingCartIcon />
									</IconButton>
								}
							/>
							<CardMedia
								component="img"
								image={url}
								className={classes.media}
							/>
						</CardActionArea>

						<CardContent>
							<Typography variant="h6" className={classes.upperCase}>
								{desc.split(' ')[0].replace(',','')}
							</Typography>
							<Typography variant="subtitle2">
							{desc}
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

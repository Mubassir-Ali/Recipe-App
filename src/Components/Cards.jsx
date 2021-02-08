
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
import imgData from './../Data/allpages.json';

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
	},

}));

export const Cards = () => {
	const classes = useStyle();

	function randomDate(start, end) {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
	}
	
	



	return (
		<Container className={classes.root}>
			<Grid container spacing={5}>
				{Object.entries(imgData.slice(0,30)).map(([index,{authorImgURL,authorName,imgUrl,imgDesc}]) => (
					
					<Grid key={index} item xs={12} sm={6} lg={3}>
					<Card>
						<CardActionArea>
							<CardHeader
								title={authorName}
								subheader={"Post: "+ randomDate(new Date(2012, 0, 1), new Date())}
								avatar={<Avatar>{authorName.split(" ")[0].split("")[0]}{authorName.split(" ")[1].split("")[0]}</Avatar>}
								action={
									<IconButton>
										<AddShoppingCartIcon />
									</IconButton>
								}

								className={classes.upperCase}
							/>
							<CardMedia
								component="img"
								image={imgUrl}
								className={classes.media}
							/>
						</CardActionArea>

						<CardContent>
							<Typography variant="h6" className={classes.upperCase}>
								{imgDesc.split(' ')[0].replace(',','')}
							</Typography>
							<Typography variant="subtitle2" color="textSecondary" component="p">
							{imgDesc}
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

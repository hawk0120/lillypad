import axios from 'axios';


const getAllVideo= async () => {

				
				try {
				const response = await axios.get(process.env.URL + '/video' )
				console.log(response.data);
								if(!response.data) {
				return response.data.videoList				
								} else {
												throw new Error("Internal Server issue");
								}
				} catch(error) {
							alert(error)	
				}
} // EOF 


export default { getAllVideo }

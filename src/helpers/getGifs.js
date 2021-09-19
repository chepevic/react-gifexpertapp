export const getGifs=async(category)=>{
    const url=`api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=5wbaw16xW4g97wD3GTfNnFFwWj5yE19C`;
    const response= await fetch(`https://${url}`);
    const {data}= await response.json()
    
    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
  return gifs;
   

}
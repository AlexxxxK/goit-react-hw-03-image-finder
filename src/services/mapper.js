const mapper = arrayToMap =>
  arrayToMap.map(
    ({
      id,
      webformatURL: imgLink,
      largeImageURL: largeImgLink,
      likes,
      views,
      comments,
      downloads,
      tags,
    }) => ({
      id,
      imgLink,
      largeImgLink,
      likes,
      views,
      comments,
      downloads,
      tags,
    }),
  );

export default mapper;

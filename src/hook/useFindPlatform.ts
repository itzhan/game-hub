import usePlatfroms from "./usePlatforms";

const findPlatform = (platformId?: number) => {
  const { data: platform } = usePlatfroms();
  platform?.results.find((p) => p.id === platformId);
};
export default findPlatform;

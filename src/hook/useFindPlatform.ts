import usePlatfroms from "./usePlatforms";

const findPlatform = (platformId?: number) => {
  const { data: platform } = usePlatfroms();
  return platform?.results.find((p) => p.id === platformId);
};
export default findPlatform;

export const API_KEY = "AIzaSyCJ788wQeGhUwPJcfpPte5v7p30fzUN4fM";

export const formatViewCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  } else {
    return count.toString();
  }
};

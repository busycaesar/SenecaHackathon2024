export const dateFormat = (date: string): string => {
    return new Date(date)
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .toString();
  };
  
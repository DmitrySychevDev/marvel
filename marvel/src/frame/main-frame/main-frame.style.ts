const headerCollor: string = "#FF0000";
const contentTheme: string = "#ffffff";
const footerColor: string = "#393939";

export const styles = {
  root: {
    color: contentTheme,
  },
  bar: { padding: "20px 30px" },
  header: {
    height: "15vh",
    marginBottom: 50,
  },
  logo: {
    "& img": {
      width: 100,
      height: 50,
    },
  },
  footer: {
    height: "22vh",
    backgroundColor: footerColor,
    marginTop: 100,
  },
};

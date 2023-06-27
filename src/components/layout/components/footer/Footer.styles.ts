import { FOOTER_HEIGHT } from "@/src/components/layout/layout.constants"

const classes = {
  horizontalContainer: {
    backgroundColor: "#ECE9E4",
    width: "100%",
    height: `${FOOTER_HEIGHT}px`,
    color: "#004c45",
    padding: "0px 50px 0px 50px",
  },
  verticalContainer: {
    backgroundColor: "#ECE9E4",
    width: "100%",
    height: `230px`,
    color: "#004c45",
    padding: "20px 0px 20px 0px",
  },
  footerLabel: {
    fontWeight: 700,
  },
  linkLabel: {
    fontWeight: 700,
    cursor: "pointer",
  },
  socialMediaIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "10px",
  },
}

export default classes

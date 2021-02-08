import React, { useMemo } from "react";
import { ContactType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { grey32 } from "../../Theme";
import { IconButton, Typography } from "@material-ui/core";
import { ArrowForwardIos, LinkedIn, Phone, Email } from "@material-ui/icons";

function ContactItem({
  icon: iconProp,
  title,
  description,
  link,
}: ContactType) {
  const classes = useStyles();
  const icon = useMemo(() => {
    switch (iconProp) {
      case "linkedin":
        return <LinkedIn className={classes.icon} />;

      case "phone":
        return <Phone className={classes.icon} />;

      case "email":
        return <Email className={classes.icon} />;
    }

    return <Email className={classes.icon} />;
  }, [iconProp]);

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className={classes.root}>
      {icon}
      <Typography variant={"h5"} className={classes.title}>
        {title}
      </Typography>
      <Typography variant={"subtitle2"} className={classes.desc}>
        {description}
      </Typography>
      {link && (
        <IconButton className={classes.icon} onClick={handleClick}>
          <ArrowForwardIos fontSize={"large"} />
        </IconButton>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 4,
    background: "#282828",
    padding: 10,
    margin: 10,
    boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.4)",
    height: 210,
    width: 260,
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
    margin: 10,
  },
  desc: {
    margin: 10,
    textAlign: "left",
    color: "white",
  },
  icon: {
    padding: 5,
    color: "white",
  },
});

export default ContactItem;

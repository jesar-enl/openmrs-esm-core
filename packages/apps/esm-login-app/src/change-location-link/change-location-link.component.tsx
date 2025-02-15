import React from "react";
import { Button } from "carbon-components-react";
import { useTranslation } from "react-i18next";
import { navigate } from "@openmrs/esm-framework";
import styles from "./change-location.link.component.scss";
import Location20 from "@carbon/icons-react/es/location/20";

interface ChangeLocationLinkProps {
  referer?: string;
  currentLocation: string;
}

const ChangeLocationLink: React.FC<ChangeLocationLinkProps> = ({
  referer,
  currentLocation,
}) => {
  const { t } = useTranslation();

  const changeLocation = () => {
    navigate({
      to: `\${openmrsSpaBase}/login/location?returnToUrl=${referer}`,
    });
  };

  return (
    <div className={styles.changeLocationLinkContainer}>
      <Location20 />
      <div>
        {currentLocation}
        <Button onClick={changeLocation}>{t("change", "Change")}</Button>
      </div>
    </div>
  );
};

export default ChangeLocationLink;

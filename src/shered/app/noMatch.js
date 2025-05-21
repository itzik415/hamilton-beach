import { useTranslation } from "react-i18next";
import React from "react";

export default function NoMatch() {
  const { t } = useTranslation("shered/app");

  return <div>{t("four-oh-four")}</div>;
}

import FileListTable from "components/files/FileListTable";
import UploadFileButton from "components/files/UploadFileButton";
import UsageInstructions from "components/UsageInstructions";
import React from "react";
import { useTranslation } from "react-i18next";
import Instructions from "./instructions.mdx";

export default function SearchList() {
  const { t } = useTranslation();

  return (
    <main className="max-w-4xl mx-auto">
      <section>
        <div className="flex flex-nowrap justify-between items-center">
          <h1 className="text-3xl">{t("pages.search")}</h1>
          <UploadFileButton
            purpose="search"
            enforce={{
              required: ["text"],
              optional: ["metadata"],
              count: ["text"],
              maxTokens: 2000,
            }}
          />
        </div>
        <FileListTable
          purpose="search"
          linkTo={(file) => `/search/${file.id}`}
        />
      </section>
      <UsageInstructions>
        <Instructions />
      </UsageInstructions>
    </main>
  );
}

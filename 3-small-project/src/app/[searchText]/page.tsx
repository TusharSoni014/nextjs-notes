//tsrfc for typescript boilerplate code

import React from "react";
import getWikiResults from "../../../lib/getWikiresult";

type Props = {
  params: {
    searchText: string;
  };
};

export async function generateMetadata({ params: { searchText } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchText);
  const data = await wikiData;
  const displayTerm = searchText.replaceAll("%20", " ");
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found!`,
    };
  }
  return {
    title: displayTerm,
    description: `search results for ${displayTerm}`,
  };
}

export default async function SearchResult({ params: { searchText } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchText);
  const data = await wikiData;
  const results: WikiResult[] | undefined = data?.query?.pages;
  const content = (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
      {results
        ? Object.values(results).map((result, index) => {
            return (
              <div
                key={index}
                className="__wiki_item border-2 p-3 rounded bg-slate-800"
              >
                <img src={result.thumbnail?.source} alt="" />
                <p>{result.title}</p>
              </div>
            );
          })
        : `${searchText} not found !`}
    </section>
  );
  return content;
}

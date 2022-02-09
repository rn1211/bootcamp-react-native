import { Text } from "@ui-kitten/components";
import React from "react";
import { Lyrics } from "../components/Lyrics";
import { ScreenContainer } from "../components/ScreenContainer";

type Props = {};

export const LyricsScreen = ({ route }: Props) => {
  const { artist, song } = route.params;
  return (
    <ScreenContainer>
      <Text category="h3" appearance="hint">
        {artist}
      </Text>
      <Text category="h3">{song}</Text>
      <Lyrics params={route.params} />
    </ScreenContainer>
  );
};

import { Text } from "react-native";
import React from "react";
import { useSearch } from "../hooks/useSearch";
import { Avatar } from "@ui-kitten/components";

type ArtistAvatarProps = {
  artist: string;
};

export const ArtistAvatar = ({ artist }: ArtistAvatarProps) => {
  const { isLoading, isError, data } = useSearch(artist);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  const uri = data?.response.hits[0].result.primary_artist.header_image_url;

  return <Avatar size="giant" source={{ uri }} />;
};

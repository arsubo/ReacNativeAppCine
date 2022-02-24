import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: false,
    key: 'unique_key',
  });

  let primary = '';
  let secondary = '';

  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.dominant;
      secondary = colors.average;
      break;
    case 'web':
      primary = colors.dominant;
      secondary = colors.lightVibrant;
      break;
    case 'ios':
      // iOS result properties
      primary = colors.primary;
      secondary = colors.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [primary, secondary];
};

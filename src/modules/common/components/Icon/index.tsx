import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: string;
}

const Icon: React.FC<IconProps> = ({ type, ...rest }): JSX.Element | null => {
  const ImportedIconRef = React.useRef<
    React.FC<React.SVGProps<SVGSVGElement>>
  >();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`../../../../assets/icons/${type}.svg`)
        ).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [type]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

export default Icon;

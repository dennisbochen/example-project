import { StarWarsConsole } from '../../components/StarWarsConsole';
import { useStarWarsConsole } from '../../hooks/useStarWarsConsole';

type ConnectedStarWarsConsoleProps = {
  initialData: Record<string, any>;
};

export const ConnectedStarWarsConsole = ({
  initialData,
}: ConnectedStarWarsConsoleProps) => {
  const { data, isFetching, refetch } = useStarWarsConsole({
    initialData,
  });

  return (
    <StarWarsConsole
      displayData={data}
      isFetching={isFetching}
      onClickRefetch={() => refetch()}
    />
  );
};

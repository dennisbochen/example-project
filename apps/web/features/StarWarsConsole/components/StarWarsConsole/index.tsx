import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { cn } from '@demo/ui';

type ConsoleProps = {
  displayData: string;
  isFetching?: boolean;
  onClickRefetch: () => void;
};

export const StarWarsConsole = ({
  displayData,
  isFetching,
  onClickRefetch,
}: ConsoleProps) => (
  <div className="text-xs md:text-base text-white bg-black/20 p-5 rounded-md block relative">
    <button disabled={isFetching} onClick={onClickRefetch}>
      <ArrowPathIcon className="w-5 h-5 absolute top-4 right-4 stroke-2" />
    </button>
    {displayData && (
      <pre className={cn('transition-opacity', isFetching && 'opacity-30')}>
        {displayData}
      </pre>
    )}
  </div>
);

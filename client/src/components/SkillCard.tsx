import { useState } from 'react';
import Button from './Button';
import Badge from './badge';

const SkillCard = ({ skills, onFinishEditing }: { skills: string[]; onFinishEditing: () => void }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Skills</h2>
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l4-4L19 7"
            />
          </svg>
          {isEdit ? 'Done' : 'Edit'}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="primary" label={skill} size="medium" />
        ))}
      </div>
      {isEdit && (
        <Button onClick={onFinishEditing} variant="primary" className="mt-4">
          Done
        </Button>
      )}
    </div>
  );
};

export default SkillCard;
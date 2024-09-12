import { useState, useCallback, useEffect } from 'react';
import { CrossIcon } from '../../../svg';
import { ILink } from '../../../interfaces/Link';

interface Prop {
  link: ILink;
  handleModalClose?: () => void;
  handleEdit?: (updatedLink: ILink) => void;
}

const LinkEditCard: React.FC<Prop> = ({
  link,
  handleModalClose,
  handleEdit,
}) => {
  const [tags, setTags] = useState<string[]>(link.tags || []);
  const [inputValue, setInputValue] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>(link.shortUrl || '');

  useEffect(() => {
    setShortUrl(link.shortUrl || '');
  }, [link.shortUrl]);

  const addTag = useCallback(
    (tag: string) => {
      if (!tags.includes(tag)) {
        setTags((prevTags) => [...prevTags, tag]);
      }
      setInputValue('');
    },
    [tags],
  );

  const handleTagInputKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        e.preventDefault();
        addTag(inputValue.trim());
      }
    },
    [inputValue, addTag],
  );

  const handleTagInputBlur = useCallback(() => {
    if (inputValue.trim()) {
      addTag(inputValue.trim());
    }
  }, [inputValue, addTag]);

  const removeTag = useCallback((index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  }, []);

  const handleShortUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setShortUrl(e.target.value);
    },
    [],
  );

  const handleTagInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );

  const handleSave = useCallback(() => {
    handleEdit?.({ ...link, shortUrl, tags });
  }, [handleEdit, link, shortUrl, tags]);

  return (
    <div className="md:w-[500px]">
      <h1 className="text-[24px] font-header">Edit Link</h1>
      <input
        type="text"
        value={link.originalUrl}
        placeholder="Original Link"
        name="link"
        className="w-full p-2 rounded-full border border-gray-400 my-[10px] text-gray-500 cursor-not-allowed"
        disabled
      />

      <div className="flex items-center w-full rounded-full border border-gray-400 my-[10px]">
        <span
          className="p-2 mr-0 rounded-l-full bg-gray-100 text-gray-500 cursor-not-allowed select-none"
          aria-disabled="true"
        >
          linkfluencer.io/
        </span>
        <input
          type="text"
          value={shortUrl}
          onChange={handleShortUrlChange}
          placeholder="Smart Link"
          name="link"
          className="flex-1 p-2 rounded-r-full border-none"
        />
      </div>

      <div className="border border-gray-400 p-[10px] rounded-3xl flex flex-wrap gap-2 my-[16px]">
        {tags.map((tag, index) => (
          <label
            key={`tag-${index}`}
            className="flex justify-start items-center p-1 rounded-3xl bg-gray-100 shadow-md"
          >
            <CrossIcon
              className="size-5 p-[2px] rounded-full bg-white text-gray-500 cursor-pointer"
              onClick={() => removeTag(index)}
              aria-label={`Remove tag ${tag}`}
            />
            <span className="pr-3 pl-2">{tag}</span>
          </label>
        ))}
        <input
          type="text"
          name="tags"
          placeholder="tags ..."
          className="outline-none flex-1 p-2" // Ensure full width
          value={inputValue}
          onChange={handleTagInputChange}
          onKeyDown={handleTagInputKeyPress}
          onBlur={handleTagInputBlur}
          aria-label="Add tag"
        />
      </div>

      <div className="mt-2 flex justify-end items-center gap-2">
        <button
          className="w-[113px] border border-gray-800 font-bold rounded-full px-[20px] py-[8px] font-header"
          onClick={handleModalClose}
        >
          Cancel
        </button>
        <button
          className="w-[113px] border-[1px] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LinkEditCard;

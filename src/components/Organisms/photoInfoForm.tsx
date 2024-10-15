import  { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Box } from '@mui/material';

interface PhotoInfoFormProps {
  is_top_content: boolean;
  description: string;
  path: string;
}

const PhotoInfoForm = () => {
  const [formValues, setFormValues] = useState<PhotoInfoFormProps>({
    is_top_content: false,
    description: '',
    path: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControlLabel
        control={
          <Checkbox
            name="is_top_content"
            checked={formValues.is_top_content}
            onChange={handleChange}
          />
        }
        label="Is Top Content"
      />
      <TextField
        label="Description"
        name="description"
        value={formValues.description}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Path"
        name="path"
        value={formValues.path}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );
};

export default PhotoInfoForm;

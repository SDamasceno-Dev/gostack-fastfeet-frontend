/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component that allows to insert avatar in the Courier profile
 */

// Importing dependencies
import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

// Import the style used
import { Container } from './styles';

// Default avatar for the input
import defaultAvatar from './addPhoto.svg';

import api from '~/services/api';

export default function AvatarInput({ avatar_url }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(avatar_url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || defaultAvatar} alt="" />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

// PropTypes necessary
AvatarInput.propTypes = {
  avatar_url: PropTypes.string.isRequired,
};

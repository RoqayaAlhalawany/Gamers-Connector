package com.partyup.payload;

import com.partyup.model.posting.ContentData;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class PostUploadDto {
	private String text; // Text content of the post
	private List<MultipartFile> files; // List of files associated with the post
	private List<ContentData> contents; // List of content data associated with the post
	public List<ContentData> getContents() { return contents; }
	public void setContents(List<ContentData> contents) { this.contents = contents; }

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<MultipartFile> getFiles() {
		return files;
	}

	public void setFiles(List<MultipartFile> files) {
		this.files = files;
	}

	public void clearFiles() {
		if (files != null) files.clear();
	}
}

package com.partyup.util;

import java.io.ByteArrayOutputStream;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

public class FileCompressionUtility {

	public static byte[] compressFile(byte[] data) {

		// Create a Deflater object to compress the data
		Deflater deflater = new Deflater();
		deflater.setLevel(Deflater.BEST_COMPRESSION);
		deflater.setInput(data);
		deflater.finish();

		// Create a ByteArrayOutputStream to store the compressed data
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] tmp = new byte[4 * 1024];
		while (!deflater.finished()) {
			int size = deflater.deflate(tmp);
			outputStream.write(tmp, 0, size);
		}
		try {
			outputStream.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		// Return the compressed data as a byte array
		return outputStream.toByteArray();
	}

	public static byte[] decompressFile(byte[] data) {
		// Create an Inflater object to decompress the data
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		// Create a ByteArrayOutputStream to store the decompressed data
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] tmp = new byte[4 * 1024];
		try {
			while (!inflater.finished()) {
				// Decompress the data and write it to the output stream
				int count = inflater.inflate(tmp);
				outputStream.write(tmp, 0, count);
			}
			outputStream.close();
		} catch (Exception exception) {
			exception.printStackTrace();
		}
		// Return the decompressed data as a byte array
		return outputStream.toByteArray();
	}
}
